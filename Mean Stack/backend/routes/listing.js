const router = require('express').Router();
const verify = require('../routes/verifyToken');
const Listing = require('../model/Listing');

// Add new listing
router.post('/', verify, async (req, res) => {
  const listings = new Listing({
    title: req.body.title,
    price: req.body.price,
    locality: req.body.locality,
    details: req.body.details,
  });
  try {
    const saveListing = await listings.save();
    res.send(saveListing);
  } catch (error) {
    res.status(400).send(error);
  }
});

// Get All listing
router.get('/', verify, async (req, res) => {
  try {
    const listings = await Listing.find();
    res.json(listings);
  } catch (error) {
    res.json({ message: error });
  }
});

// single listing
router.get('/:listingId', verify, async (req, res) => {
  try {
    const listing = await Listing.findById(res.params.listingId);
    res.json(listing);
  } catch (error) {
    res.json({ message: error });
  }
});

// Update listing
router.put('/:listingId', verify, async (req, res) => {
  try {
    const listings = {
      title: req.body.title,
      price: req.body.price,
      locality: req.body.locality,
      details: req.body.details,
    };

    const updateListing = await Listing.findByIdAndUpdate(
      { _id: req.params.listingId },
      listings
    );
    res.json(updateListing);

  } catch (error) {
    res.json({ message: error });
  }
});

// Delete listing
router.delete('/:listingId', verify, async (req, res) => {
  try {
    const removeListing = await Listing.findByIdAndDelete(req.params.listingId);
    res.json(removeListing);
  } catch (error) {
    res.json({ message: error })
  }
});

module.exports = router;
