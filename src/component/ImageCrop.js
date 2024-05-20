import React, { Component } from "react";
import ReactCrop from "react-image-crop";
import "../assets/ReactCrop.css";
import { Button, Row, Col } from "react-bootstrap";
import {
  base64StringtoFile,
  extractImageFileExtensionFromBase64,
} from "../helpers/cropperHelper";

class ImageCrop extends Component {
  constructor(props, context) {
    super(props, context);
    this.state = {
      crop: {
        unit: props?.unit,
        width: props?.width,
        height: props?.height,
        aspect: props?.aspect || 145 / 78,
        x: 10,
        y: 25,
      },
      disabled: true,
      base64Image: "data:image/jpeg;base64,/9j/4AAQSk",
      croppedImageUrl: null,
      croppedImage: null,
      inputImg: props.imgToCrop || "",
    };
  }

  onCropComplete = crop => {
    this.makeClientCrop(crop);
    const { base64Image } = this.state;
    const fileExtention = extractImageFileExtensionFromBase64(base64Image);
    const newImage = base64StringtoFile(
      base64Image,
      "profile." + fileExtention
    );
    this.setState({
      croppedImage: newImage,
      disabled: !newImage || newImage.size < 200,
    });
  };

  handleDoneCropping = () => {
    this.props.onCropDone(this.state.croppedImage);
  };

  handleCroppingCancel = () => {
    this.props.onCropCancel();
  };

  onCropChange = (crop, percentCrop) => {
    console.log("Cropper state:::", crop, percentCrop);
    this.setState({ crop });
  };

  makeClientCrop = async crop => {
    if (this.imageRef && crop.width && crop.height) {
      const croppedImageUrl = await this.getCroppedImg(
        this.imageRef,
        crop,
        "newFile.jpeg"
      );
      this.setState({ croppedImageUrl });
    }
  };

  getCroppedImg = (image, crop, fileName) => {
    console.log("Image:::", image);
    console.log("Crop:::", crop);
    const canvas = document.createElement("canvas");
    const pixelRatio = window.devicePixelRatio;
    const scaleX = image.naturalWidth / image.width;
    const scaleY = image.naturalHeight / image.height;
    const ctx = canvas.getContext("2d");

    canvas.width = crop.width * pixelRatio * scaleX;
    canvas.height = crop.height * pixelRatio * scaleY;

    ctx.setTransform(pixelRatio, 0, 0, pixelRatio, 0, 0);
    ctx.imageSmoothingQuality = "high";

    ctx.drawImage(
      image,
      crop.x * scaleX,
      crop.y * scaleY,
      crop.width * scaleX,
      crop.height * scaleY,
      0,
      0,
      crop.width * scaleX,
      crop.height * scaleY
    );
    const base64Image = canvas.toDataURL("image/png");
    this.setState({ base64Image: base64Image });
    return base64Image;
  };

  onImageLoaded = image => {
    this.imageRef = image;
  };

  render() {
    const { crop } = this.state;
    return (
      <Row className="text-center">
        <Col md={12}>
          <ReactCrop
            src={this.state?.inputImg}
            crop={crop}
            ruleOfThirds
            className={"cropping-container"}
            onImageLoaded={this.onImageLoaded}
            onComplete={this.onCropComplete}
            onChange={this.onCropChange}
          />
        </Col>
        <Col md={12}>
          <Button
            title="Click to done cropping"
            className={"btn-primary btn-sm smaller-btn mr-2"}
            onClick={e => this.handleDoneCropping()}
            disabled={this.state.disabled}
          >
            Done
          </Button>
          <Button
            title={"Click to cancel"}
            className={"btn-primary btn-sm smaller-btn"}
            onClick={e => this.handleCroppingCancel()}
          >
            Cancel
          </Button>
        </Col>
      </Row>
    );
  }
}

export default ImageCrop;
