import React from 'react';

export const Pin = () => (    
    <svg width="24px" height="28px" viewBox="0 0 28 34" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink">
        <defs>
            <filter x="-16.0%" y="-38.1%" width="132.0%" height="176.2%" filterUnits="objectBoundingBox" id="filter-0leqto-s9b-1">
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
            <g id="AT-Lunch---List-(iPhone-XS)" transform="translate(-154.000000, -728.000000)" stroke="#FFFFFF" strokeWidth="2">
                <g id="Map-Button" filter="url(#filter-0leqto-s9b-1)" transform="translate(137.000000, 724.000000)">
                    <g id="Pin" transform="translate(24.000000, 11.000000)">
                        <path d="M0,6.75732218 C0,10.6527197 4.47337278,16.2175732 7.04142012,19 C9.60946746,16.2175732 14,10.6527197 14,6.75732218 C14,3.0209205 10.852071,0 7.04142012,0 C3.14792899,0 0,3.0209205 0,6.75732218 Z" id="Fill-1"></path>
                        <circle id="Oval" cx="7" cy="7" r="3"></circle>
                    </g>
                </g>
            </g>
        </g>
    </svg>
)

export default Pin;
