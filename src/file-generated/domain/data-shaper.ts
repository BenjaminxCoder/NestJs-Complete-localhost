export class DataShaper {
  shape(rawData: any[], view?: string): any[] {
    switch (view) {
      case 'customer':
        return rawData.map(item => ({
          id: item.id,
          label: item.name,
          value: item.value
        }));

      case 'warehouse':
        return rawData.map(item => ({
          id: item.id,
          name: item.name,
          internalCode: item.internalCode,
          location: item.warehouseLocation
        }));

      default:
        return rawData.map(item => ({
          id: item.id,
          label: item.name,
          value: item.value
        }));
    }
  }
}
