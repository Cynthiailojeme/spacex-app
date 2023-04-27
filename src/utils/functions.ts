export const formatDate = (data: string) => {
    const date = new Date(data);
    
    return date?.toUTCString();
  };