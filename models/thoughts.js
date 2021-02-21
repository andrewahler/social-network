const { Schema, model } = require('mongoose');
const dateFormat = require('../utils/dateFormat');

const ThoughtsSchema = new Schema(
    {
        thoughtText: {
            type: 'string',
            required: true,
            max: 280,
        },
        createdAt: {
            type: Date,
            default: Date.now,
            get: createdAtVal => dateFormat(createdAtVal)
        },
        username:{
            type: string,
            required: true,
        },
        
})
const ReplySchema = new Schema(
    {
      replyId: {
        type: Schema.Types.ObjectId,
        default: () => new Types.ObjectId()
      },
      replyBody: {
        type: String,
        required: true
      },
      writtenBy: {
        type: String,
        required: true,
      },
      createdAt: {
        type: Date,
        default: Date.now,
        get: createdAtVal => dateFormat(createdAtVal)
      }
    },
    {
      toJSON: {
        getters: true
      }
    }
  );

  ThoughtsSchema.virtual('commentCount').get(function() {
    return this.comments.reduce(
      (total, comment) => total + comment.replies.length + 1,
      0
    );
  });
  
  const Thoughts = model('Thoughts', ThoughtsSchema);
  
  module.exports = Thoughts;