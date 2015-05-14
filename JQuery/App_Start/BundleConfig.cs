using System.Web;
using System.Web.Optimization;

namespace JQuery.App_Start
{
   public class BundleConfig
   {
      public static void RegisterBundles(BundleCollection bundles)
      {
         bundles.Add(new ScriptBundle("~/bundles/jquery").Include(
            "~/Scripts/jquery-{version}.js"));

         bundles.Add(new ScriptBundle("~/bundles/jscript").Include(
            "~/Scripts/Selectors/*.js"));
      }
   }
}