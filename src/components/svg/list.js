import React from 'react';

export const List = () => (
  <svg width="29px" height="28px" viewBox="0 0 29 28" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink">
    <defs>
      <filter x="-16.0%" y="-38.1%" width="132.0%" height="176.2%" filterUnits="objectBoundingBox" id="filter-vu16xwmguk-1">
        <feOffset dx="0" dy="0" in="SourceAlpha" result="shadowOffsetOuter1"></feOffset>
        <feGaussianBlur stdDeviation="2" in="shadowOffsetOuter1" result="shadowBlurOuter1"></feGaussianBlur>
        <feColorMatrix values="0 0 0 0 0   0 0 0 0 0   0 0 0 0 0  0 0 0 0.2 0" type="matrix" in="shadowBlurOuter1" result="shadowMatrixOuter1"></feColorMatrix>
        <feMerge>
          <feMergeNode in="shadowMatrixOuter1"></feMergeNode>
          <feMergeNode in="SourceGraphic"></feMergeNode>
        </feMerge>
      </filter>
  </defs>
  <g id="Page-1" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
      <g id="AT-Lunch---Map-(iPhone-XS)" transform="translate(-154.000000, -731.000000)" fill="#FFFFFF">
        <g id="List-Button" filter="url(#filter-vu16xwmguk-1)" transform="translate(137.000000, 724.000000)">
          <g id="List-Icon" transform="translate(23.000000, 13.000000)">
            <rect id="Rectangle" x="7" y="1" width="10" height="2"></rect>
            <rect id="Rectangle-Copy" x="7" y="7" width="10" height="2"></rect>
            <rect id="Rectangle-Copy-2" x="7" y="13" width="10" height="2"></rect>
            <circle id="Oval" cx="2" cy="2" r="2"></circle>
            <circle id="Oval-Copy" cx="2" cy="8" r="2"></circle>
            <circle id="Oval-Copy-2" cx="2" cy="14" r="2"></circle>
          </g>
        </g>
      </g>
    </g>
  </svg>
)

export default List;
