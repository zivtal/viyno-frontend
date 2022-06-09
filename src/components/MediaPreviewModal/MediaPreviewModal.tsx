import React, { useEffect } from "react";
import { OverlayModal } from "../OverlayModal/OverlayModal";
import { CloseButton } from "../CloseButton/CloseButton";

interface MediaPreviewModal {
  url?: string | null;
  onClose: Function;
  onNext?: Function;
  onPrevious?: Function;
}

export const MediaPreviewModal = (
  props: MediaPreviewModal
): JSX.Element | null => {
  const beforeClose = () => {
    props.onClose?.();
  };

  return props.url ? (
    <OverlayModal if={!!props.url} onClose={() => beforeClose()}>
      {/*<div slot="overlay">*/}
      {/*  <button className="media-preview__navigation-button">*/}
      {/*    <img src={tryRequire("imgs/icons/prev.svg")} alt="Previous" />*/}
      {/*  </button>*/}

      {/*  <button className="media-preview__navigation-button">*/}
      {/*    <img src={tryRequire("imgs/icons/next.svg")} alt="Next" />*/}
      {/*  </button>*/}
      {/*</div>*/}

      <div slot="header">
        <div className="media-preview__close">
          <CloseButton onClick={() => beforeClose()}></CloseButton>
        </div>
      </div>

      <div slot="content">
        <div className="media-preview">
          <img className="media-preview__image" src={props.url} />
        </div>
      </div>
    </OverlayModal>
  ) : null;
};
