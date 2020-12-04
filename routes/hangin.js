const express = require("express");
const router = express.Router();
const db = require("../models");
const sequelize = require('sequelize')


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

router.get("/regions", (req, res) => {
    // var halaman = {where: {}}
    // const {region} = req.query
    // if(region) halaman.where.in_region = region.toUpperCase()

    db.Somewhere.findAll({ attributes: [[sequelize.fn('DISTINCT', sequelize.col('in_region')), 'region']]})
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

router.get("/provinces", (req, res) => {
    var halaman = {where: {}}
    const {region} = req.query
    if(region) halaman.where.in_region = region.toUpperCase()

    db.Somewhere.findAll({...halaman, attributes: [[sequelize.fn('DISTINCT', sequelize.col('in_province')), 'province']]})
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
router.get("/municities", (req, res) => {
    var halaman = {where: {}}
    const {region, province} = req.query
    if(region) halaman.where.in_region = region.toUpperCase()
    if(province) halaman.where.in_province = province.toUpperCase()

    db.Somewhere.findAll({...halaman, attributes: [[sequelize.fn('DISTINCT', sequelize.col('in_municity')), 'municity']]})
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