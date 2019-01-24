module.exports = [
  (context, record, update) => {
    switch (context.request.method) {
      case 'create':return record;
      case 'update': return record;
      case 'delete': return null;
    }
  },
];