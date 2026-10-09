import { definePlugin } from "@utils/types";

export default definePlugin({
    name: "AutoSender",
    description: "إضافة إرسال الرسائل",
    authors: [{ name: "User", id: 1234567890n }],
    start() {
        console.log("تم تفعيل الإضافة بنجاح");
    },
    stop() {
        console.log("تم إيقاف الإضافة");
    }
});