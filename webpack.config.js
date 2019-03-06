const ExtractTextPlugin = require("extract-text-webpack-plugin");

module.exports = {
  entry: {
    "oppgave1/processed.css": ["./oppgave1/oppgave1.scss"],
    "oppgave2/processed.css": ["./oppgave2/oppgave2.scss"],
    "oppgave3/processed.css": ["./oppgave3/oppgave3.scss"],
    "oppgave4/processed.css": ["./oppgave4/oppgave4.scss"],
    "ferdigEksempel/processed.css": ["./ferdigEksempel/ferdigEksempel.scss"]
  },
  output: {
    filename: "[name]",
    path: __dirname + "/"
  },

  resolve: {
    extensions: [".scss", ".js"]
  },

  module: {
    rules: [
      {
        test: /\.scss$/,
        use: ExtractTextPlugin.extract({
          fallback: "style-loader",
          use: ["css-loader", "sass-loader"]
        })
      }
    ]
  },
  plugins: [new ExtractTextPlugin("./[name]")]
};
