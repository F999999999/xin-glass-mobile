import { useEffect } from "react";
import { renderRoutes } from "react-router-config";

import TabBarCom from "../../components/TabBar";

const Admin = props => {
  // 判断是否需要重定向
  useEffect(() => {
    // 取出重定向路径
    if (props.location.search.length > 0) {
      const searchData = new URLSearchParams(props.location.search);
      const redirect = searchData.get("redirect");

      // 判断是否需要重定向
      if (redirect) return props.history.push(redirect);
    }
  }, []);

  return (
    <>
      {console.log(props)}
      {/* 内容 */}
      {renderRoutes(props.route.routes)}
      {/* TabBar */}
      <TabBarCom route={props.route} tabBarList={props.route.meta.tabBarList} />
    </>
  );
};

export default Admin;
