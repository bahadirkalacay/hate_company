export const getComments = async () => {
    return [
      {
        id: "1",
        body: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
        username: "Kullanıcı 1",
        userId: "1",
        parentId: null,
        createdAt: "2022-11-16T23:00:33.010+02:00",
      },
      {
        id: "2",
        body: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
        username: "Kullanıcı 2",
        userId: "2",
        parentId: null,
        createdAt: "2022-11-16T23:00:33.010+02:00",
      },
      {
        id: "3",
        body: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
        username: "Kullanıcı 2",
        userId: "2",
        parentId: "1",
        createdAt: "2022-11-16T23:00:33.010+02:00",
      },
      {
        id: "4",
        body: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
        username: "Kullanıcı 1",
        userId: "2",
        parentId: "2",
        createdAt: "2022-11-16T23:00:33.010+02:00",
      },
    ];
  };
  
  export const createComment = async (text, parentId = null) => {
    return {
      id: Math.random().toString(36).substr(2, 9),
      body: text,
      parentId,
      userId: "1",
      username: "Kullanıcı 1",
      createdAt: new Date().toISOString(),
    };
  };
  
  export const updateComment = async (text) => {
    return { text };
  };
  
  export const deleteComment = async () => {
    return {};
  };