import React, { Component } from 'react';
import {ProfileImage, HoverProfileImage} from '../ui/icons';

class HoverImage extends Component {
  constructor(props) {
    super(props);
    this.state = { showDetails: false };
  }

  handleShowDetails = () => this.setState({showDetails: true})
  handleHideDetails = () => this.setState({showDetails: false})

  render() {
    const {showDetails} = this.state;
    const {imageUrl, name, title} = this.props;
    return (
      <React.Fragment>
        {showDetails && (
          <HoverProfileImage>
            <p className="small">{name}</p>
            <p className="small grey">{title}</p>
          </HoverProfileImage>
        )}
        <ProfileImage
          spaced
          src={imageUrl}
          onMouseOver={this.handleShowDetails}
          onMouseLeave={this.handleHideDetails}
        />
      </React.Fragment>
    )
  }
}

export default HoverImage;
