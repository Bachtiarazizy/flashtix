"use client";

import { useEffect } from "react";
import { useParams } from "next/navigation";
import { OrganizationList, useOrganizationList } from "@clerk/nextjs";

import React from "react";

const OrgControl = () => {
  const params = useParams();
  const { setActive } = useOrganizationList();

  useEffect(() => {
    if (!setActive) return;

    setActive({
      organization: params.organizationId as string,
    });
  }, [setActive, params.organizationId]);

  return null;
};

export default OrgControl;
