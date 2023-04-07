import React from 'react';
import ContentLoader from 'react-content-loader';

const Skeleton = () => (
  <ContentLoader 
    speed={2}
    width={280}
    height={460}
    viewBox='0 0 280 460'
    backgroundColor='#f3f3f3'
    foregroundColor='#e6e6e6'
  >
    <rect x='0' y='302' rx='10' ry='10' width='280' height='88' /> 
    <rect x='0' y='415' rx='10' ry='10' width='108' height='32' /> 
    <circle cx='138' cy='119' r='119' /> 
    <rect x='0' y='256' rx='10' ry='10' width='280' height='25' /> 
    <rect x='140' y='408' rx='25' ry='25' width='140' height='42' />
  </ContentLoader>
)

export default Skeleton;