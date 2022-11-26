const { Schema, model } = require("mongoose");
const Reaction = require("./Reaction");

// {
//   "userId": "638106407ce6e40b04e70ee2",
//   "thoughtText": "More thought",
//   "username": "Tom" }
const thoughtSchema = new Schema(
  {
    thoughtText: {
      type: String,
      required: true,
      minLength: 1,
      maxLength: 280,
    },
    createdAt: {
      type: Date,
      default: Date.now,
    },
    username: {
      type: String,
      required: true,
    },
    reactions: [Reaction],
    // {
    //   type: Schema.Types.ObjectId,
    //   ref: "reaction",
    // },
    // ],
  },
  {
    toJSON: {
      virtuals: true,
    },
    id: false,
  },
  {
    timestamps: true,
    toJSON: { getters: true, virtuals: true },
  }
);

// Create a virtual property `upvoteCount` that gets the amount of comments per user
thoughtSchema
  .virtual("reactionCount")
  // Getter
  .get(function () {
    return this.reactions.length;
  });

// Initialize our Post model
const Thought = model("thought", thoughtSchema);

module.exports = Thought;
