import Gig from "../models/gig.model.js";
import createError from "../utils/createError.js";
import User from "../models/user.model.js";

export const createGig = async (req, res, next) => {
  console.log(req.body)
  if (!req.isSeller)
    return next(createError(403, "Only sellers can create a gig!"));
  const seller = await User.findById(req.userId).exec();
  const newGig = new Gig({
    userId: req.userId,
    ...req.body,
    seller:seller.username,
    sellerImageUrl:seller.img,
  });
  console.log(newGig);

  try {
    const savedGig = await newGig.save();
    console.log(savedGig);
    res.status(201).json(savedGig);
  } catch (err) {
    console.log(err);
    next(err);
  }
};
export const deleteGig = async (req, res, next) => {

  try {
    const gig = await Gig.findById(req.params.id);
    if (gig.userId !== req.userId)
      return next(createError(403, "You can delete only your gig!"));

    await Gig.findByIdAndDelete(req.params.id);
    res.status(200).send("Gig has been deleted!");
  } catch (err) {
    next(err);
  }
};
export const getGig = async (req, res, next) => {
  try {
    const gig = await Gig.findById(req.params.id);
    if (!gig) next(createError(404, "Gig not found!"));
    res.status(200).send(gig);
  } catch (err) {
    next(err);
  }
};
export const sellerGigs = async (req, res, next) => {
  const s_id= req.params.s_id.toString();
  console.log(s_id);
  try {
    const filters = {
      ...({ userId: s_id })
    };

    const gigs = await Gig.find(filters).sort({ createdAt: -1 });
    console.log(gigs);
    res.status(200).send(gigs);
  } catch (err) {
    next(err);
  }
}
export const getGigs = async (req, res, next) => {

  const q = req.query;

  if(!q.isSeller){

    const filters = {
      ...(q.userId && { userId: q.userId }),
      ...(q.cat && { cat: q.cat }),
    ...((q.min || q.max) && {
      price: {
        ...(q.min && { $gt: q.min }),
        ...(q.max && { $lt: q.max }),
      },
    }),
    ...(q.search && { title: { $regex: q.search, $options: "i" } }),
  };
  try {
    const gigs = await Gig.find(filters).sort({ [q.sort]: -1 });
    res.status(200).send(gigs);
  } catch (err) {
    next(err);
  }
  }

};
export const getTopRatedGigs = async (req, res, next) => {
  try {
    const topRatedGigs = await Gig.find()
      .sort({ totalStars: -1 })
      .limit(10);

    res.status(200).send(topRatedGigs);
  } catch (err) {
    next(err);
  }
};