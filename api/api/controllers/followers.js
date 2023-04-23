const User = require("../models/User");
const { StatusCodes } = require("http-status-codes");

const getFollowers = async (req, res) => {
	const userId = req.params.userId;

	try {
		const user = await User.findById(userId).populate("followers");
		res.status(StatusCodes.OK).json(user.followers);
	} catch (error) {
		console.error(error);
		res
			.status(StatusCodes.INTERNAL_SERVER_ERROR)
			.json({ message: "Error retrieving followers" });
	}
};

const addFollowers = async (req, res) => {
	const userId = req.params.userId;
	const followerId = req.body.followerId;

	try {
		const user = await User.findByIdAndUpdate(userId, {
			$addToSet: { followers: followerId },
		});
		res.status(StatusCodes.CREATED).json(user.followers);
	} catch (error) {
		console.error(error);
		res
			.status(StatusCodes.INTERNAL_SERVER_ERROR)
			.json({ message: "Error adding follower" });
	}
};

module.exports = {
	getFollowers,
	addFollowers,
};
