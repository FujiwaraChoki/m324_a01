const lib = require("./trafficlight");

//Export api
module.exports = app => {

    //welcome message
    /**
     *  /api/welcome: welcome message
     */
    app.get('/api/welcome', (req, res) => {
        res.status(200).json({
            message: "Welcome to Traffic-Light!",
            status: 'success'
        });
    });

    /**
     * /api/trafficlight/red (is a parameter)
     */
    app.get('/api/trafficlight/:color', (req, res) => {
        const color = req?.params?.color;

        res.status(200).json({
            message: lib.trafficLight(color),
            status: 'success'
        });
    });
}
