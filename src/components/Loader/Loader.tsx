import { LoaderWrapper } from './Loadre.styled';
import { BarLoader } from "react-spinners";

export const Loader = () => {
  return (
    <LoaderWrapper>
      <BarLoader/>
    </LoaderWrapper>
  );
};