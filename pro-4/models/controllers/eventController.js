const { Event } = require('../models');

exports.createEvent = async (req, res) => {
    const { title, description, date } = req.body;
    const event = await Event.create({ title, description, date, organizerId: req.user.id });
    res.status(201).json(event);
};

exports.getEvents = async (req, res) => {
    const events = await Event.findAll();
    res.json(events);
};
