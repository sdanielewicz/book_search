const { AuthenticationError } = require('apollo-server-express');
const { User} = require('../models');
const { signToken } = require('../utils/auth');


const resolvers = {
Query: {
    me: 
    async (parent, args, context) => {
        if (context.user) {
          return User.findOne({ _id: context.user._id });
        }
        throw new AuthenticationError('You need to be logged in!');
    },
},

Mutation: {
login:
async (parent, args) => {
  const user = await User.findOne({ email: args.email});
  if (!user) {
    throw new AuthenticationError("Wrong Username");
  }

  const correctPw = await user.isCorrectPassword(args.password);

  if (!correctPw) {
    throw new AuthenticationError("Wrong Password");
  }
  const token = signToken(user);
  return { token, user };
},

addUser:
async (parent, { username, email, password }) => {
    const user = await User.create({ username, email, password });
    const token = signToken(user);

    return { token, user };
  },

removeBook: 
async (parent, args, context) => {
    if(context.user){
    const updatedUser = await User.findOneAndUpdate(
        { _id: context.user._id },
        { $pull: { savedBooks: { bookId: params.bookId } } },
        { new: true }
      );
      return res.json(updatedUser);

    }
    throw new AuthenticationError({ message: "Couldn't find user with this id!" });
      
},

saveBook:
async (parent, args, context) => {
  if(context.user){
    const updatedUser = await User.findOneAndUpdate(
      { _id: context.user._id },
      { $addToSet: { savedBooks: body } },
      { new: true, runValidators: true }
    );
    return updatedUser;
  }
  throw new AuthenticationError('You need to be logged in!');


},
},
};

module.exports = resolvers;
