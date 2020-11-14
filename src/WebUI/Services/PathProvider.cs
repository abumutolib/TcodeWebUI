using System.IO;
using Application.Common.Interfaces;

namespace WebUI.Services
{
    public class PathProvider : IPathProvider
    {
        public string MapPath(string path)
        {
            if (string.IsNullOrEmpty(path))
                return null;
            //TODO: get host name from appsettings config
            string host = "https://localhost:44335/";
            string filePath = Path.Combine(host, "RootPathFiles", path);
            return filePath;
        }
    }
}
