import React, { useState } from "react";

import Button from "@/components/common/button";
import Layout from "@/components/layout";

const Contact = () => {
  const [local, setLocal] = useState();

  return (
    <Layout>
      contact
      <Button className={"bg-blue-400 px-4 py-3 rounded-lg"}>
        Ini Button Cok
      </Button>
    </Layout>
  );
};

export default Contact;
