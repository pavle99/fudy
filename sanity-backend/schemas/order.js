export default {
  name: "order",
  title: "order",
  type: "document",
  fields: [
    {
      name: "name",
      title: "name",
      type: "string",
      options: {
        maxLength: 40,
      },
    },
    {
      name: "phone",
      title: "phone",
      type: "string",
      options: {
        maxLength: 15,
      },
    },
    {
      name: "address",
      title: "address",
      type: "string",
      options: {
        maxLength: 100,
      },
    },
    {
      name: "method",
      title: "method",
      type: "number",
    },
    {
      name: "total",
      title: "total",
      type: "number",
    },
    {
      name: "status",
      title: "status",
      type: "number",
    },
  ],
};
