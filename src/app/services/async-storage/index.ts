import AsyncStorage from '@react-native-community/async-storage';

class AsyncStorageService {
  private readonly PREFIX: string = 'create-react-native-espeo-app';

  public get(key: string) {
    return AsyncStorage.getItem(`${this.PREFIX}-${key}`);
  }

  public set(key: string, value: string) {
    AsyncStorage.setItem(`${this.PREFIX}-${key}`, value);
  }

  public remove(key: string) {
    AsyncStorage.removeItem(`${this.PREFIX}-${key}`);
  }
}

export default new AsyncStorageService();
