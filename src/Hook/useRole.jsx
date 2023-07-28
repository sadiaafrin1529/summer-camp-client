import { useEffect, useState } from "react";

const useRole = (email) => {
  const [isRole, setIsRole] = useState("Buyer");
  const [isRoleLoading, setIsRoleLoading] = useState(true);

  useEffect(() => {
    fetch(`http://localhost:5000/users/role/${email}`)
      .then((res) => res.json())
      .then((data) => {
        // console.log(data);
        setIsRole(data.isRole);
        // console.log(isRole);
        setIsRoleLoading(false);
      });
  }, [email, isRole]);
  return [isRole, isRoleLoading];
};

export default useRole;