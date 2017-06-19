
import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { css, StyleSheet } from 'aphrodite/no-important';
import Lightbox from 'react-images';

var itermclass = "item";
class Gallery extends Component {
  constructor () {
    super();

    this.state = {
      lightboxIsOpen: false,
      currentImage: 0,
    };

    this.closeLightbox = this.closeLightbox.bind(this);
    this.gotoNext = this.gotoNext.bind(this);
    this.gotoPrevious = this.gotoPrevious.bind(this);
    this.gotoImage = this.gotoImage.bind(this);
    this.handleClickImage = this.handleClickImage.bind(this);
    this.openLightbox = this.openLightbox.bind(this);
  }
  openLightbox (index, event) {
    event.preventDefault();
    this.setState({
      currentImage: index,
      lightboxIsOpen: true,
    });
  }
  closeLightbox () {
    this.setState({
      currentImage: 0,
      lightboxIsOpen: false,
    });
  }
  gotoPrevious () {
    this.setState({
      currentImage: this.state.currentImage - 1,
    });
  }
  gotoNext () {
    this.setState({
      currentImage: this.state.currentImage + 1,
    });
  }
  gotoImage (index) {
    this.setState({
      currentImage: index,
    });
  }
  handleClickImage () {
    if (this.state.currentImage === this.props.images.length - 1) return;

    this.gotoNext();
  }
  renderGallery () {
    const { images } = this.props;

    if (!images) return;

    // const gallery = 
    // // images.filter(i => i.useForDemo).map((obj, i) => {
    // //   return (
    // //     <a
    // //       href={obj.src}
    // //       className={css(classes.thumbnail, classes[obj.orientation])}
    // //       key={i}
    // //       onClick={(e) => this.openLightbox(i, e)}
    // //     >
    // //     <img src={obj.thumbnail} className={css(classes.source)} />
    // //     </a>
    // //   );
    // // });

    return (
      <div className={css(classes.gallery)}>
        <div className={css(description.des)}>
            <div className="text-center row" style={{margin:"30px"}}>
            <div className="col-sm-8 col-sm-offset-2">
              <hr/>
            </div>
            </div>
            <div className="row text-center" style={{"font-family": "'Josefin Sans', sans-serif"}}>
                <div className="col-sm-4 col-sm-offset-2 text-center wow fadeInUp">
                      <a
                        href={images[0].src}
                        key={0}
                        onClick={(e) => this.openLightbox(0, e)}
                      >
                      <img src={images[0].thumbnail} className={css(classes.source)} />
                      </a>
                </div>
                <div className="col-sm-4 text-left">
                    <p className="titletext">
                      The spectacle before us was indeed sublime.
                    </p>
                    <h3 className="pasText">
                      Apparently we had reached a great height in the atmosphere, 
                      for the sky was a dead black, and the stars had ceased to twinkle. 
                    </h3>
                </div>
            </div> 
            <div className="text-center row" style={{margin:"30px"}}>
            <div className="col-sm-8 col-sm-offset-2">
            <hr />
            </div>
            </div>
            <div className="row text-center">
                <div className="col-sm-4 col-sm-offset-2 text-left">
                    <p className="titletext">
                      The spectacle before us was indeed sublime.
                    </p>
                    <h3 className="pasText">
                      Apparently we had reached a great height in the atmosphere, 
                      for the sky was a dead black, and the stars had ceased to twinkle. 
                    </h3>
                </div>
               <div className="col-sm-4 text-center wow fadeInUp">
                      <a
                        href={images[1].src}
                        key={1}
                        onClick={(e) => this.openLightbox(1, e)}
                      >
                      <img src={images[1].thumbnail} className={css(classes.source)} />
                      </a>
                </div>
                
            </div>
            <div className="text-center row" style={{margin:"30px"}}>
            <div className="col-sm-8 col-sm-offset-2">
            <hr />
            </div>
            </div>
            <div className="row text-center">
                <div className="col-sm-4 col-sm-offset-2 text-center wow fadeInUp">
                  <a
                        href={images[2].src}
                        key={2}
                        onClick={(e) => this.openLightbox(2, e)}
                      >
                      <img src={images[2].thumbnail} className={css(classes.source)} />
                      </a>
                </div>
                <div className="col-sm-4 text-left">
                    <p className="titletext">
                      The spectacle before us was indeed sublime.
                    </p>
                    <h3 className="pasText">
                      Apparently we had reached a great height in the atmosphere, 
                      for the sky was a dead black, and the stars had ceased to twinkle. 
                    </h3>
                </div>
            </div>
          </div>
          <div className="text-center row" style={{margin:"30px"}}>
            <div className="col-sm-8 col-sm-offset-2">
            <hr />
            </div>
            </div>
        
      </div>
    );
  }
  render () {
    return (
      <div className="section">
        {this.props.heading && <h2>{this.props.heading}</h2>}
        {this.props.subheading && <p>{this.props.subheading}</p>}
        {this.renderGallery()}
        <Lightbox
          currentImage={this.state.currentImage}
          images={this.props.images}
          isOpen={this.state.lightboxIsOpen}
          onClickImage={this.handleClickImage}
          onClickNext={this.gotoNext}
          onClickPrev={this.gotoPrevious}
          onClickThumbnail={this.gotoImage}
          onClose={this.closeLightbox}
          showThumbnails={this.props.showThumbnails}
          theme={this.props.theme}
        />
      </div>
    );
  }
}

Gallery.displayName = 'Gallery';
Gallery.propTypes = {
  heading: PropTypes.string,
  images: PropTypes.array,
  showThumbnails: PropTypes.bool,
  subheading: PropTypes.string,
};

const gutter = {
  small: 2,
  large: 4,
};

const description = StyleSheet.create({
    des:{
      "font-family": 'Open Sans',
      "margin": "30px",
    },
});




const classes = StyleSheet.create({
  gallery: {
    marginRight: -gutter.small,
    overflow: 'hidden',
    fontWeight: "100",

    '@media (min-width: 500px)': {
      marginRight: -gutter.large,
    },
  },

  // anchor
  thumbnail: {
    boxSizing: 'border-box',
    display: 'block',
    lineHeight: 0,
    paddingRight: gutter.small,
    paddingBottom: gutter.small,
    overflow: 'hidden',

    '@media (min-width: 500px)': {
      paddingRight: gutter.large,
      paddingBottom: gutter.large,
    },
  },

  // orientation
  landscape: {
    width: '30%',
  },
  square: {
    paddingBottom: 0,
    width: '40%',

    '@media (min-width: 500px)': {
      paddingBottom: 0,
    },
  },

  // actual <img />
  source: {
    border: 0,
    display: 'block',
    height: 'auto',
    maxWidth: '100%',
    width: 'auto',
  },
});

export default Gallery;