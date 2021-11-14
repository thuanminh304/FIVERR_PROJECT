import withLayout from "hocs/withLayout";
import React, {useEffect} from "react";
import Header from 'components/Header/Header.jsx';
import Footer from 'components/Footer/Footer';
import { useDispatch, useSelector } from "react-redux";
import { actGetAllUser } from "containers/admin/user/module/action";
const Clientlayout = (props) => {
  const dispatch = useDispatch();
  const  {listAllUser} = useSelector(state=>state.managementUserReducer);
  useEffect(() => {
    if(listAllUser.length === 0) {
      dispatch(actGetAllUser());
    }
  },[])
  return (
    <>
      <Header />
        {props.children}
      <Footer />
    </>
  );
};

export default withLayout(Clientlayout);
