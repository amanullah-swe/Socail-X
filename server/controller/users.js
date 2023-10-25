import { User } from "../models/User.js";
/*READ*/
const getUser = async (req, res) => {
    try {
        const { id } = req.params;
        const user = await User.findById(id);
        res.status(200).json(user);
    } catch (error) {
        res.status(404).json({ error: error.message });
    }

}
const getUserFriends = async (req, res) => {
    try {
        const { id } = req.params;
        const user = await User.findById(id);
        const friends = await Promise.all(
            user.friends.map((id) => {
                return User.findById(id);
            })
        );

        const formattedFriends = friends.map(
            ({ firstName, lastName, picturePath, location, occupation, _id }) => {
                return { firstName, lastName, picturePath, location, occupation, _id };
            });
        res.status(200).json(formattedFriends);
    } catch (error) {
        res.status(404).json({ error: error.message });
    }

}

/*UPDATE */
const addRemoveFriend = async (req, res) => {
    try {
        const { id, friendId } = req.params;
        const user = await User.findById(id);
        if (id == friendId) {
            return res.status(404).json({ error: "friend id must be different from user id" });
        }
        const friend = await User.findById(friendId);
        if (user.friends.includes(friendId)) {
            user.friends = user.friends.filter((id) => id !== friendId);
            friend.friends = friend.friends.filter((id) => id !== id);
        } else {
            user.friends.push(friendId);
            friend.friends.push(id);
        }
        await user.save()
        await friend.save();

        const friends = await Promise.all(
            user.friends.map((id) => User.findById(id))
        );

        const formattedFriends = friends.map(
            ({ firstName, lastName, picturePath, location, occupation, _id }) => {
                return { firstName, lastName, picturePath, location, occupation, _id };
            });
        res.status(200).json(formattedFriends);
    } catch (error) {
        res.status(404).json({ error: error.message });
    }
}
export { getUser, getUserFriends, addRemoveFriend };