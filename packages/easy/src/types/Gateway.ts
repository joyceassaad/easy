import { List } from './List';
import { Json, JsonValue } from './Json';
import { Id } from './Id';
import { Exception } from './Exception';

// export interface Gateway {
//   all: () => Promise<List<Json>>;
//   byId: (id: Id) => Promise<Json | undefined>;
//   by: (key: string, value: JsonValue) => Promise<List<Json>>;
//   search: (q: JsonValue) => Promise<List<Json>>;
//   exists: (id: Id) => Promise<boolean>;
//
//   add: (item: Json) => Promise<Json>;
//   update: (item: Json) => Promise<Json>;
//   remove: (id: Id) => Promise<boolean>;
// }

export abstract class Gateway {
  all(): Promise<List<Json>> {
    throw Exception.IsNotImplemented;
  }

  byId(id: Id): Promise<Json | undefined> {
    throw Exception.IsNotImplemented;
  };

  by(key: string, value: JsonValue): Promise<List<Json>> {
    throw Exception.IsNotImplemented;
  };

  search(q: JsonValue): Promise<List<Json>> {
    throw Exception.IsNotImplemented;
  };

  exists(id: Id): Promise<boolean> {
    throw Exception.IsNotImplemented;
  };

  add(item: Json): Promise<Json> {
    throw Exception.IsNotImplemented;
  };

  update(item: Json): Promise<Json> {
    throw Exception.IsNotImplemented;
  };

  remove(id: Id): Promise<boolean> {
    throw Exception.IsNotImplemented;
  };
}
