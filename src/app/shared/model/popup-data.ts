export class PopupData {
    header?:string;
    img?: string;
    title?: string;
    text?:string;
    confirmButton?:buttonData;
    secoundButton?:buttonData;

}
export class buttonData {
    text?:string;
    icon?:string;
    class?:string;
    color?:string="primary";
    disabled?:boolean;
}