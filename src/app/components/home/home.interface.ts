export interface Work{
    name: String;
    description: String;
    startJob:Date;
    endJob:Date;
    url:String;
    code: Boolean;
    aplication: Boolean;
    tecnologies: number[];
}


export interface Tech{
    idtech: number;
    name: String;
    url: String;
}