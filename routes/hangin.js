const express = require("express");
const router = express.Router();
const db = require("../models");



router.get("/all", (req, res) => {
    var halaman = {where: {}}
    const {region, province, municity } = req.query
    // if(region) halaman.where.in_region = region.toUpperCase
    // if(province) halaman.where.in_province = province.toUpperCase
    // if(municity) halaman.where.in_municity = municity.toUpperCase
    console.log(region, province, municity)
    // return res.status(200).json({ msg: req });
    // return res.status(200).json({ msg: 'All mo olo mo. Tinatamad ako mag paginate' });
});



router.get("/hamburger", (req, res) => {
    var halaman = {where: {}}
    const {region, province, municity } = req.query
    if(region) halaman.where.in_region = region.toUpperCase()
    if(province) halaman.where.in_province = province.toUpperCase()
    if(municity) halaman.where.in_municity = municity.toUpperCase()

    db.Somewhere.findAll(halaman)
        .then((obj) => {
            return res.status(200).json({ data: obj });
        })
        .catch((err) => {
            console.log(err);
            return res
                .status(500)
                .json({ msg: "Something doesn't seems right.", data: err });
        });
});

module.exports = router