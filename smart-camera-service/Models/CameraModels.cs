namespace SmartCameraService.Models
{
    public class LoginRequest
    {
        public string Username { get; set; } = string.Empty;
        public string Password { get; set; } = string.Empty;
    }

    public class CameraStatus
    {
        public string Status { get; set; } = "Online";
        public string Resolution { get; set; } = "1920x1080";
        public int Bitrate { get; set; } = 4096;
        public int Framerate { get; set; } = 25;
        public string Encoding { get; set; } = "H.265";
        public bool IsRecording { get; set; } = true;
    }

    public class CameraEvent
    {
        public string Id { get; set; } = Guid.NewGuid().ToString();
        public DateTime Timestamp { get; set; }
        public string Type { get; set; } = string.Empty; // Motion, Line Crossing, etc.
        public string CameraName { get; set; } = "Camera 01";
        public string Description { get; set; } = string.Empty;
        public string ThumbnailUrl { get; set; } = string.Empty;
    }

    public class NetworkConfig
    {
        public string IpAddress { get; set; } = "192.168.1.108";
        public string SubnetMask { get; set; } = "255.255.255.0";
        public string Gateway { get; set; } = "192.168.1.1";
        public string PrimaryDns { get; set; } = "8.8.8.8";
        public string SecondaryDns { get; set; } = "8.8.4.4";
        public int HttpPort { get; set; } = 80;
        public int RtspPort { get; set; } = 554;
        public int OnvifPort { get; set; } = 8000;
        public bool DhcpEnabled { get; set; } = false;
    }

    public class SystemInfo
    {
        public string Model { get; set; } = "SC-PRO-2024-NEO";
        public string SerialNumber { get; set; } = "SN-98234-XJ-882";
        public string FirmwareVersion { get; set; } = "v2.4.1 Build 231124";
        public string MacAddress { get; set; } = "BC:AD:28:44:91:FA";
        public string DeviceName { get; set; } = "SecureCam PRO";
        public string Uptime { get; set; } = "12 days, 04:22:11";
    }
}
