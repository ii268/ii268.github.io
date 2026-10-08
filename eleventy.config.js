export default function(eleventyConfig) {
    eleventyConfig.addPassthroughCopy("src/assets");
    eleventyConfig.addPassthroughCopy({"src/rootfiles/" :"/"});

    eleventyConfig.addPairedShortcode("blanka", function(content, href) { 
        return `<a href="${href}" target="_blank" rel="noopener noreferrer">${content}</a>`;
    });
}

export const config = {
    dir: {
        input: "src",
        output: "_site/"
    }
}