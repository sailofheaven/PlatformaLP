import mongoose from 'mongoose'
import Tag from './tag'

var Schema = mongoose.Schema;

var NewsSchema = new Schema({
    title: { type: String, required: true },
    text: { type: String, required: true },
    createDate: {
        type: String,
        required: false,
        default: Date.now
    },
    updateDate: {
        type: String,
        required: false,
        default: Date.now
    },

    tags: [{ type: Schema.Types.ObjectId, ref: 'Tag' }],
})

NewsSchema.statics.updateTags = (newsID, data, add = false) => {
    const NewsModel = mongoose.model('News');
    const TagsModel = Tag;

    const Tags = [];

    for (let index = 0; index < data.tags.length; index++) {
        TagsModel.findOne({ title: data.tags[index] }).then((tag) => {
            if (!tag) {
                tag = new TagsModel();
                tag.title = data.tags[index];
                tag.save();
            }

            Tags.push(tag);
        })
    }
    if(add){
            let newsInfo = new NewsModel();
            newsInfo.title = data.title;
            newsInfo.text = data.text;
            newsInfo.tags = Tags;
        
        
        return newsInfo.save();
    }
    return NewsModel.findOne({ _id: newsID }).then((newsInfo) => {
        if (!newsInfo) {console.log(111)
            newsInfo = new NewsModel();
            newsInfo.title = data.title;
            newsInfo.text = data.text;
        }
        newsInfo.tags = Tags;
        newsInfo.save();
        
        return newsInfo;
    }).catch(d=>{console.log((d))});
}

module.exports = mongoose.model('News', NewsSchema)