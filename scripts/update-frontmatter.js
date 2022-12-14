const fs = require('fs').promises;
const matter = require('gray-matter');

const updateFrontmatter = async () => {
  const [, , ...mdFilePaths] = process.argv;

  mdFilePaths.forEach(async (path) => {
    const file = matter.read(path);
    const { data: currentFrontmatter } = file;

    if (currentFrontmatter.published === true) {
      const updatedFrontmatter = {
        ...currentFrontmatter,
        dateModified: new Date().toISOString()
      };
      file.data = updatedFrontmatter;
      const updatedFileContent = matter.stringify(file);
      fs.writeFile(path, updatedFileContent);
    }
  });
};

updateFrontmatter();
