import TelegramBot from "node-telegram-bot-api";

const token = process.env.TELEGRAM_BOT_TOKEN;

if (!token) {
  console.error("NO TELEGRAM_BOT_TOKEN");
  process.exit(1);
}

const bot = new TelegramBot(token, { polling: true });

console.log("🤖 Bot started");

bot.on("message", (msg) => {
  const chatId = msg.chat.id;
  bot.sendMessage(chatId, "Привет! Я живой 🙂");
});
