import React from 'react';
import { categoryColors } from './styles';
export const MasonryPost = ({ post, tagsOnTop }) => {
    const windowWidth = window.innerWidth;
    const imageBackground = { backgroundImage: `url("${require(`../../assets/images/${post.image}`)}")` };
    const style = windowWidth > 900 ? { ...imageBackground, ...post.style } : imageBackground;
    return (
        <a className="masonry-post overlay" style={style} href={post.link}>
            <div className="image-text" sgtyle={{ justifyContent: tagsOnTop ? 'space-between' : 'flex-end' }}>
                <div className="tags-container">
                    {post.categories.map((tag, index) => {
                        return (
                            <span key={index} className="tag" style={{ backgroundColor: categoryColors[tag] }}>
                                {tag.toUpperCase()}
                            </span>
                        );
                    })}
                </div>
                <div>
                    <h2 className="image-title">{post.title}</h2>
                    <span className="image-date">{post.date}</span>
                </div>
            </div>
        </a>
    );
};
