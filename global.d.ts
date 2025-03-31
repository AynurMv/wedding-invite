declare module "*.css" {
  const content: Record<string, string>
  export default content
}
declare module "*.module.scss" {
  const classes: { [key: string]: string }
  export default classes
}
declare module "*.svg"
declare module "*.png"
declare module "*.jpeg"
declare module "*.jpg"
