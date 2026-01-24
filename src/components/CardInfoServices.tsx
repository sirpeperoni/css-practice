type Props = {
  textBackgroundColor: string;
  arrowBackgroundColor: string;
  arrowImglink: string;
  topText: string;
  bottomText: string;
  linkTextColor: string;
};

export const CardInfoServices = ({
  textBackgroundColor,
  arrowBackgroundColor,
  arrowImglink,
  topText,
  bottomText,
  linkTextColor,
}: Props) => {
  return (
    <div className={`card-info`}>
      <div className='card-info-column'>
        <div className={`card-info-text ${textBackgroundColor}`}>{topText}</div>
        <div className={`card-info-text ${textBackgroundColor}`}>{bottomText}</div>
      </div>
      <div className={`card-info-link `}>
        <a href=''>
          <div className={`arrow-container ${arrowBackgroundColor}`}>
            <img src={arrowImglink} alt='' />
          </div>

          <span className={`${linkTextColor}`}>Learn more</span>
        </a>
      </div>
    </div>
  );
};
