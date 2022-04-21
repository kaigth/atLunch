import React from 'react';
import PropTypes from 'prop-types';

import './styles.scss';

export const DropDown = ({ toggle, children }) => {
    const [ isOpen, setIsOpen ] = useState(false);
    const toggle = () => setIsOpen(!isOpen);
  
    return (
      <>
          {isOpen && (
            <div>
                <div>
                    {children}
                </div>
                <div>
                    <button />
                </div>
            </div>
          )}
      </>
    );
  }

export default DropDown;
