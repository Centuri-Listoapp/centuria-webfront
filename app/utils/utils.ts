export function isMobileDevice() {
  console.log("isMobileDevice:", navigator.userAgent);
  return /Mobi|Android|iPhone|iPad|iPod/i.test(navigator.userAgent);
}

export function getOperatingSystem(): "Android" | "iOS" | "Other" {
  const userAgent = navigator.userAgent || navigator.vendor;

  if (/android/i.test(userAgent)) {
    return "Android";
  }
  if (/iPad|iPhone|iPod/i.test(userAgent)) {
    return "iOS";
  }
  return "Other";
}
