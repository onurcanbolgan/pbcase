const express = require('express');
const router = express.Router();
const Ether = require('../helper/validate');
const ether = new Ether(process.env.ETHER_NETWORK,process.env.API_KEY);

/* GET balances */
router.post('/getBalance', async (req, res, next) => {
    let addresses = [];
    if (Array.isArray(req.body)) {
        if (req.body.length > 0) {
            for (let i = 0; i < req.body.length; i++) {
                if (ether.validate(req.body[i])) {
                    addresses.push({
                        address: req.body[i],
                        balance: ether.formatEther(await ether.getBalance(req.body[i])) + " ETH"
                    });
                } else {
                    addresses.push({
                        address: req.body[i],
                        error: "Invalid address"
                    });
                }
            }
              res.status(200).json(addresses);
        } else {
            res.status(400).json("Empty array");
        }
    }else{
        res.status(400).json("Not an array");
    }
});

router.all('*', (req, res, next) => {
    res.status(404).json("Wrong API URL");
});

module.exports = router;
