module.exports = [
  (context, record, update) => {
    switch (context.request.method) {
      case 'create':
        const now = new Date();
        record.createdAt = now;
        record.updatedAt = now;
        return record;
      case 'update':
        record.updatedAt = new Date();
        return update;
      case 'delete': return null;
    }
  },
];