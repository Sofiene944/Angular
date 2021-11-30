export interface IData{

    name:string;
    path:string;
    size:Float64Array;
    hashes:Array<Hashes>;
 
}
export interface APIResponse<T> {
    results: Array<T>;
}

interface Hashes {
  name: string;
}