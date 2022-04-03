import styled from "styled-components"
import { motion } from "framer-motion";

const Item = ({variants,children,...rest}) => {
  return (
    <motion.li
      {...rest}
      variants={variants}
      transition={{ duration: 0.5}}
    >{children}</motion.li>
  );
};


export default Item