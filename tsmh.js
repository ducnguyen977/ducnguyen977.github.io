import React, { useState } from 'react';
import { ChevronDown, ChevronRight, FileText, Download } from 'lucide-react';

const VASPComprehensiveDoc = () => {
  const [expandedSections, setExpandedSections] = useState({});

  const toggleSection = (id) => {
    setExpandedSections(prev => ({
      ...prev,
      [id]: !prev[id]
    }));
  };

  const sections = [
    {
      id: 1,
      title: "I. ĐỊNH HƯỚNG QUẢN LÝ",
      content: [
        {
          subtitle: "1. Phân định rõ nhiệm vụ của CQQL (Cơ quan Quản lý)",
          items: [
            "Xây dựng văn bản quy phạm pháp luật liên quan (nghị định, chính sách thuế, v.v.)",
            "Phối hợp cấp phép, quản lý, giám sát",
            "Báo cáo tình hình thị trường; nghiên cứu bổ sung chính sách và sản phẩm mới"
          ]
        },
        {
          subtitle: "2. Bảo vệ nhà đầu tư",
          items: [
            "Tổ chức cung cấp dịch vụ tại sàn mã hóa và phát hành tài sản mã hóa giải quyết tranh chấp theo quy định pháp luật",
            "Tiếp cận thông tin từ tổ chức cung cấp dịch vụ tài sản mã hóa công bố theo quy định pháp luật",
            "Bảo vệ quyền và lợi ích hợp pháp của mình",
            "Nhà đầu tự chịu trách nhiệm về quyết định đầu tư tại sàn mã hóa"
          ]
        },
        {
          subtitle: "3. Làm rõ trách nhiệm của tổ chức phát hành",
          items: [
            "Bảo đảm tính chính xác, đầy đủ, kịp thời, không gây hiểu nhầm về thông tin cung cấp",
            "Tuân thủ quy định pháp luật Việt Nam và pháp luật quốc gia nơi nhà đầu tư nước ngoài là công dân",
            "Tuân thủ quy định pháp luật về sở hữu nước ngoài đối với tài sản làm cơ sở cho phát hành tài sản mã hóa",
            "Chịu trách nhiệm giải quyết tranh chấp",
            "Chịu trách nhiệm thực hiện đúng theo thông tin công bố"
          ]
        },
        {
          subtitle: "4. Quyền của VASP",
          items: [
            "Hoạt động, kinh doanh theo nội dung tại Nghị quyết",
            "Lựa chọn tài sản mã hóa niêm yết",
            "Cung cấp dịch vụ phát hành",
            "Quyền thu giá dịch vụ liên quan đến hoạt động, kinh doanh tài sản mã hóa"
          ]
        },
        {
          subtitle: "5. Quy định rõ trách nhiệm của VASP",
          items: [
            "Xác minh danh tính nhà đầu tư mở tài khoản",
            "Quản lý tách biệt tiền, tài sản mã hóa của khách hàng với tiền, tài sản mã hóa của tổ chức cung cấp dịch vụ",
            "Giám sát hoạt động giao dịch",
            "Bảo đảm an ninh, an toàn hệ thống công nghệ thông tin",
            "Bảo vệ tài sản của khách hàng",
            "Bảo vệ thương khách hàng",
            "Bảo đảm thông tin quảng cáo, tiếp thị chính xác, đầy đủ, rõ ràng, không gây hiểu lầm",
            "Chịu trách nhiệm trước pháp luật về tính chính xác, trung thực, đầy đủ của hồ sơ nộp cho cơ quan quản lý và các thông tin công bố"
          ]
        },
        {
          subtitle: "6. Công khai, minh bạch trong hoạt động của VASP",
          items: [
            "Công bố thông tin định kỳ, bất thường và theo yêu cầu",
            "Minh bạch biểu giá dịch vụ",
            "Công khai hợp đồng với nhà đầu tư và các bên liên quan",
            "Minh bạch cách thức tổ chức, vận hành hệ thống ICO, giao dịch, thanh toán, lưu ký, v.v."
          ]
        }
      ]
    },
    {
      id: 2,
      title: "II. ĐIỀU KIỆN CẤP GIẤY PHÉP",
      content: [
        {
          subtitle: "Doanh nghiệp Việt Nam",
          items: [
            "Ngành cung cấp dịch vụ liên quan đến TSMH",
            "Công ty TNHH hoặc CTCP",
            "Vốn điều lệ tối thiểu: 10.000 tỷ đồng",
            "Có tối thiểu 65% vốn điều lệ do tổ chức góp vốn, trong đó có trên 35% vốn điều lệ do ít nhất 02 tổ chức là NHTM, CTCK, QLQ, CTBH, CTCN; NDTNN góp tối đa 49%",
            "Có trụ sở làm việc, đủ cơ sở vật chất, kỹ thuật, trang bị, thiết bị văn phòng",
            "Điều kiện nhân sự: TGĐ, GĐ công nghệ, 10 nhân sự có văn bằng, chứng chỉ đào tạo về an toàn thông tin mạng, 10 nhân sự có chứng chỉ hành nghề chứng khoán",
            "Quy trình nghiệp vụ: Giao dịch, lưu ký, thanh toán, kiểm soát nội bộ, ngăn ngừa xung đột lợi ích, giải quyết khiếu nại của khách hàng, bồi thường khách hàng...",
            "Hệ thống công nghệ thông tin của VASP phải đáp ứng tiêu chuẩn cấp độ 4 an toàn hệ thống công nghệ thông tin"
          ]
        }
      ]
    },
    {
      id: 3,
      title: "III. QUY ĐỊNH VỀ TỔ CHỨC THỊ TRƯỜNG GIAO DỊCH",
      content: [
        {
          subtitle: "Tổ chức thị trường giao dịch",
          items: [
            "Các giao dịch tài sản mã hóa phải được thực hiện thông qua các tổ chức cung cấp dịch vụ tài sản mã hóa do Bộ Tài chính cấp phép"
          ]
        },
        {
          subtitle: "VASP được phép",
          items: [
            "Tổ chức thị trường giao dịch",
            "Tự doanh",
            "Cung cấp dịch vụ lưu ký tài sản mã hóa",
            "Cung cấp nền tảng phát hành tài sản mã hóa"
          ]
        }
      ]
    },
    {
      id: 4,
      title: "IV. LƯU KÝ, GIAO DỊCH",
      content: [
        {
          subtitle: "Quy định về giao dịch",
          items: [
            "Sau thời hạn 6 tháng kể từ VASP đầu tiên được cấp phép, NDT Việt Nam giao dịch tài sản mã hóa không thông qua VASP do Bộ Tài chính cấp phép tùy theo tính chất, mức độ vi phạm sẽ bị xử lý"
          ]
        }
      ]
    },
    {
      id: 5,
      title: "V. MỞ TÀI KHOẢN",
      content: [
        {
          subtitle: "Đối tượng được mở tài khoản",
          items: [
            "Nhà đầu tư trong nước đang có tài sản mã hóa",
            "Nhà đầu tư nước ngoài được mở tài khoản tại VASP do Bộ Tài chính cấp phép để lưu ký, mua, bán tài sản mã hóa tại Việt Nam"
          ]
        }
      ]
    },
    {
      id: 6,
      title: "VI. QUY ĐỊNH CỤ THỂ THEO NGHỊ QUYẾT 05/2025/NQ-CP",
      content: [
        {
          subtitle: "Trách nhiệm của các Bộ, ngành",
          items: [
            "05 tổ chức cung cấp dịch vụ tài sản mã hóa",
            "Thời gian thực hiện thí điểm: 5 năm",
            "Sau khi kết thúc thời gian thực hiện thí điểm, thị trường tài sản mã hóa tiếp tục vận hành theo Nghị quyết này cho đến khi có quy định pháp luật sửa đổi, bổ sung hoặc thay thế"
          ]
        }
      ]
    },
    {
      id: 7,
      title: "VII. TRIỂN KHAI NGHỊ QUYẾT",
      content: [
        {
          subtitle: "Nghị quyết số 05/2025/NQ-CP",
          items: [
            "Điều kiện, hồ sơ, trình tự, thủ tục cấp Giấy phép cung cấp dịch vụ tổ chức thị trường giao dịch tài sản mã hóa đã được quy định cụ thể tại các Điều 8, 9, 10"
          ]
        },
        {
          subtitle: "Nghị quyết số 222/2025/QH15",
          items: [
            "Chính phủ trong phạm vi nhiệm vụ, quyền hạn của mình tổ chức thị hành; ban hành, chỉ đạo các Bộ, ngành liên quan ban hành hoặc trình ban hành các văn bản quy phạm pháp luật hướng dẫn thực hiện các cơ chế, chính sách",
            "Chính phủ quy định chi tiết và hướng dẫn thi hành các Điều 6, 9, 10, 11, 12, 13, 15, 16, 18, 19, 20, 21, 22, 23, 24, 26, 27, 30 và 31 của Nghị quyết",
            "Hiện tại chưa có văn bản quy phạm pháp luật quy định chi tiết, hướng dẫn thi hành nào được ban hành"
          ]
        }
      ]
    },
    {
      id: 8,
      title: "VIII. CƠ QUAN QUẢN LÝ, GIÁM SÁT",
      content: [
        {
          subtitle: "Nghị quyết số 05/2025/NQ-CP",
          items: [
            "Bộ Tài chính chủ trì, phối hợp với Bộ Công an, Ngân hàng Nhà nước Việt Nam quản lý, giám sát các TTCC dịch vụ TSMH"
          ]
        },
        {
          subtitle: "Nghị quyết số 222/2025/QH15",
          items: [
            "Cơ quan điều hành: Có chức năng quản lý, điều hành trực tiếp mọi hoạt động tại TTTCQT",
            "Cơ quan giám sát: Có chức năng giám sát, thanh tra, kiểm tra, phòng ngừa và xử lý vi phạm trong hoạt động tài chính tại TTTCQT"
          ]
        }
      ]
    },
    {
      id: 9,
      title: "IX. CHẾ ĐỘ CẤP PHÉP, ĐĂNG KÝ",
      content: [
        {
          subtitle: "Nghị quyết số 05/2025/NQ-CP",
          items: [
            "Bộ Tài chính chủ trì, phối hợp với Bộ Công an, Ngân hàng Nhà nước Việt Nam lựa chọn tối đa 05 TCCC dịch vụ TSMH",
            "TCCC dịch vụ TSMH do Bộ Tài chính cấp Giấy phép cung cấp dịch vụ tổ chức thị trường GD TSMH được thực hiện, cũng cấp các dịch vụ, hoạt động: Tổ chức thị trường GD TSMH; Tự doanh TSMH; Lưu ký TSMH; Cung cấp nền tảng phát hành TSMH"
          ]
        },
        {
          subtitle: "Nghị quyết số 222/2025/QH15",
          items: [
            "Thành viên TTTCQT là chủ thể được ghi nhận là Thành viên của TTTCQT theo hình thức đăng ký hoặc được công nhận Thành viên hoặc được cấp giấy phép thành lập, hoạt động theo quy định tại Nghị quyết và các văn bản quy định chi tiết, hướng dẫn thi hành",
            "Hệ thống đăng ký và công nhận Thành viên do Cơ quan điều hành xây dựng, quản lý và vận hành",
            "Có thể thành lập các sàn giao dịch, nền tảng giao dịch hoạt động trong TTTCQT"
          ]
        }
      ]
    },
    {
      id: 10,
      title: "X. CHÀO BÁN, PHÁT HÀNH TÀI SẢN MÃ HÓA",
      content: [
        {
          subtitle: "Điều kiện chào bán, phát hành",
          items: [
            "Tổ chức phát hành tài sản mã hóa là doanh nghiệp Việt Nam, đăng ký hoạt động dưới hình thức công ty trách nhiệm hữu hạn hoặc công ty cổ phần theo Luật Doanh nghiệp",
            "Tài sản mã hóa phát được phát hành dựa trên tài sản cơ sở là tài sản thực không bao gồm tài sản là chứng khoán, tiền pháp định"
          ]
        },
        {
          subtitle: "Điều kiện chào bán, phát hành (cho NDTNN)",
          items: [
            "Tài sản mã hóa chỉ được chào bán, phát hành cho nhà đầu tư nước ngoài",
            "Tài sản mã hóa này chỉ được giao dịch giữa các nhà đầu tư nước ngoài thông qua tổ chức cung cấp dịch vụ tài sản mã hóa (VASP) được Bộ Tài chính cấp phép",
            "Tối thiểu 15 ngày trước khi thực hiện chào bán, phát hành tổ chức phát hành tài sản mã hóa phải công bố thông tin về Bản cáo bạch chào bán, phát hành tài sản mã hóa và các tài liệu khác có liên quan (nếu có) trên website của VASP và tổ chức phát hành"
          ]
        }
      ]
    },
    {
      id: 11,
      title: "XI. PHẠM VI ĐIỀU CHỈNH, ĐỐI TƯỢNG",
      content: [
        {
          subtitle: "Nghị quyết số 05/2025/NQ-CP",
          items: [
            "Phạm vi điều chỉnh: Triển khai thí điểm chào bán, phát hành TSMH, tổ chức thị trường GD TSMH và cung cấp dịch vụ TSMH; QLNN về thị trường TSMH tại Việt Nam",
            "Đối tượng: TCCC dịch vụ TSMH; TCPH TSMH; tổ chức, cá nhân tham gia đầu tư TSMH và hoạt động trên thị trường TSMH tại Việt Nam trong phạm vi quy định tại Nghị quyết; Cơ quan, tổ chức và cá nhân khác có liên quan đến hoạt động chào bán, phát hành TSMH, tổ chức thị trường GD TSMH; QLNN về thị trường TSMH tại Việt Nam"
          ]
        },
        {
          subtitle: "Nghị quyết số 222/2025/QH15",
          items: [
            "Phạm vi điều chỉnh: Việc thành lập, hoạt động, quản lý, giám sát, các cơ chế chính sách đặc thù áp dụng đối với TTTCQT tại Việt Nam",
            "Đối tượng: Thành viên TTTCQT, các NDT, cơ quan, tổ chức, cá nhân có liên quan đến hoạt động của TTTCQT được thành lập theo Nghị quyết",
            "TTTCQT là khu vực có ranh giới địa lý được xác định do Chính phủ thành lập, đặt tại TPHCM và TP. Đà Nẵng, tập trung hệ sinh thái đa dạng các dịch vụ tài chính và dịch vụ hỗ trợ"
          ]
        }
      ]
    },
    {
      id: 12,
      title: "XII. QUY ĐỊNH VỀ TÀI SẢN MÃ HÓA VÀ SỬ DỤNG TIỀN TỆ",
      content: [
        {
          subtitle: "Nghị quyết số 05/2025/NQ-CP",
          items: [
            "Định nghĩa rõ 'tài sản mã hóa' là một loại 'tài sản số', thống nhất với Luật Công nghiệp công nghệ số",
            "Các quy định được xây dựng xoay quanh tài sản mã hóa và các hoạt động liên quan",
            "NDTNN phải mở 01 tài khoản thanh toán bằng Đồng Việt Nam tại 01 ngân hàng, chi nhánh ngân hàng nước ngoài được phép kinh doanh, cung ứng dịch vụ ngoại hối tại Việt Nam để thực hiện các giao dịch thu, chi liên quan đến mua, bán tài sản mã hóa tại Việt Nam"
          ]
        },
        {
          subtitle: "Nghị quyết số 222/2025/QH15",
          items: [
            "Không định nghĩa trực tiếp 'tài sản số' hoặc 'tài sản mã hóa'",
            "Tài sản số là một loại sản phẩm, dịch vụ cung cấp tại Trung tâm tài chính quốc tế",
            "Việc thanh toán, chuyển tiền, niêm yết, quảng cáo, báo giá, định giá, ghi giá đối với các hoạt động và dịch vụ giữa các Thành viên hoặc giữa Thành viên với tổ chức, cá nhân ở nước ngoài được sử dụng ngoại tệ; các trường hợp khác thực hiện theo quy định pháp luật hiện hành về sử dụng ngoại hối trên lãnh thổ Việt Nam"
          ]
        }
      ]
    },
    {
      id: 13,
      title: "XIII. NGUYÊN TẮC THÀNH LẬP, HOẠT ĐỘNG CỦA TTTCQT",
      content: [
        {
          subtitle: "Các nguyên tắc chính",
          items: [
            "Chủ thể đáp ứng điều kiện được áp dụng cơ chế, chính sách đặc thù",
            "Thành viên hoạt động hiệu quả, minh bạch, liêm chính; chuyên nghiệp trong cung cấp dịch vụ tài chính, dịch vụ hỗ trợ; áp dụng các chuẩn mực quốc tế trong hoạt động",
            "Quản lý nhà nước bảo đảm sự độc lập của TTTCQT",
            "Nhà nước công nhận và bảo hộ quyền sở hữu tài sản, vốn đầu tư, thu nhập, các quyền và lợi ích hợp pháp khác của Thành viên",
            "Nhà nước có cơ chế, chính sách đặc thù, vượt trội nhằm phát triển thị trường chứng khoán, bảo hiểm, hoạt động ngân hàng, công nghệ tài chính, tài sản số, hàng hóa, thương mại điện tử tại Việt Nam và hội nhập với thị trường quốc tế",
            "Cơ quan điều hành và Cơ quan giám sát được tổ chức tinh gọn, có thẩm quyền phù hợp, hiệu lực, hiệu quả; được áp dụng thủ tục hành chính đặc biệt, đáp ứng yêu cầu của nhà đầu tư, tổ chức, cá nhân"
          ]
        }
      ]
    },
    {
      id: 14,
      title: "XIV. NGUYÊN TẮC TRIỂN KHAI NGHỊ QUYẾT SỐ 05/2025/NQ-CP",
      content: [
        {
          subtitle: "Các nguyên tắc thực hiện",
          items: [
            "Thận trọng, có kiểm soát, có lộ trình phù hợp với thực tiễn, an toàn, minh bạch, hiệu quả, bảo vệ quyền và lợi ích hợp pháp của các tổ chức, cá nhân tham gia thị trường tài sản mã hóa",
            "Tuân thủ pháp luật Việt Nam và các Điều ước quốc tế mà Việt Nam là thành viên",
            "Đảm bảo an ninh, an toàn thị trường tài chính, tiền tệ, trật tự xã hội, lợi ích công cộng",
            "Bảo đảm tính chính xác, trung thực, đầy đủ, kịp thời, không gây hiểu nhầm của thông tin công bố; tuân thủ các quy định về việc phát hành, giao dịch, thông tin nội bộ, mục đích sử dụng tài sản mã hóa",
            "Chào bán, phát hành, giao dịch, thanh toán TSMH phải thực hiện bằng Đồng Việt Nam",
            "Áp dụng như các quy định về thuế đối với chứng khoán",
            "Bảo vệ quyền, lợi ích hợp nhân hoặc giải quyết tranh chấp được thực hiện thông qua thương lượng, hòa giải hoặc yêu cầu Trọng tài hoặc Tòa án Việt Nam giải quyết theo quy định của pháp luật"
          ]
        }
      ]
    },
    {
      id: 15,
      title: "XV. CƠ QUAN BAN HÀNH VÀ MỤC TIÊU",
      isComparison: true
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 to-emerald-100 p-6">
      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <div className="bg-gradient-to-r from-green-700 to-emerald-600 text-white rounded-t-2xl p-8 shadow-2xl">
          <div className="flex items-center gap-4 mb-4">
            <FileText className="w-12 h-12" />
            <div>
              <h1 className="text-3xl font-bold">TÀI LIỆU TỔNG HỢP</h1>
              <p className="text-green-100 text-lg">VASP & Quy định quản lý tài sản mã hóa tại Việt Nam</p>
            </div>
          </div>
          <div className="bg-green-800/30 rounded-lg p-4 mt-4">
            <p className="text-sm">📋 Tài liệu chi tiết về Nghị quyết 05/2025/NQ-CP và 222/2025/QH15</p>
          </div>
        </div>

        {/* Content */}
        <div className="bg-white rounded-b-2xl shadow-2xl">
          <div className="p-6">
            {sections.map((section) => (
              <div key={section.id} className="mb-4 border-b border-gray-200 last:border-b-0">
                {section.isComparison ? (
                  <div className="pb-6">
                    <h2 className="text-xl font-bold text-green-800 mb-4">{section.title}</h2>
                    
                    <div className="bg-green-50 rounded-lg p-6 mb-6">
                      <h3 className="font-semibold text-lg text-green-900 mb-4">So sánh hai Nghị quyết</h3>
                      
                      <div className="overflow-x-auto">
                        <table className="w-full border-collapse">
                          <thead>
                            <tr className="bg-green-700 text-white">
                              <th className="border border-green-600 p-3 text-left">Tiêu chí</th>
                              <th className="border border-green-600 p-3 text-left">Nghị quyết số 05/2025/NQ-CP</th>
                              <th className="border border-green-600 p-3 text-left">Nghị quyết số 222/2025/QH15</th>
                            </tr>
                          </thead>
                          <tbody>
                            <tr>
                              <td className="border border-gray-300 p-3 font-semibold bg-gray-50">Cơ quan ban hành</td>
                              <td className="border border-gray-300 p-3">Chính phủ</td>
                              <td className="border border-gray-300 p-3">Quốc hội</td>
                            </tr>
                            <tr>
                              <td className="border border-gray-300 p-3 font-semibold bg-gray-50 align-top">Mục tiêu</td>
                              <td className="border border-gray-300 p-3">
                                <ul className="list-disc ml-4 space-y-2">
                                  <li>Thể chế hóa chủ trương, đường lối của Đảng tại các Nghị quyết số 52-NQ/TW ngày 27/9/2019 và Nghị quyết số 57-NQ/TW ngày 22/12/2024</li>
                                  <li>Thiết lập khung pháp lý để thí điểm thị trường TSMH tại Việt Nam</li>
                                  <li>Thực hiện cam kết của Chính phủ về PCRT/TTKB/PBVKHDHL</li>
                                  <li>Bảo vệ nhà đầu tư khi tham gia thị trường tài sản mã hóa tại Việt Nam</li>
                                </ul>
                              </td>
                              <td className="border border-gray-300 p-3">
                                <ul className="list-disc ml-4 space-y-2">
                                  <li>Thể chế hóa các chủ trương, đường lối của Đảng</li>
                                  <li>Xây dựng TTTCQT tại TP. Hồ Chí Minh và TP. Đà Nẵng theo mô hình thống nhất quản lý, có định hướng phát triển sản phẩm riêng, phát huy lợi thế từng địa phương</li>
                                  <li>TTTCQT vận hành theo các chuẩn mực quốc tế tiên tiến, kết nối với các thị trường và trung tâm tài chính lớn trên thế giới</li>
                                </ul>
                              </td>
                            </tr>
                          </tbody>
                        </table>
                      </div>
                    </div>

                    <div className="space-y-4">
                      <div className="bg-blue-50 rounded-lg p-4">
                        <h4 className="font-semibold text-blue-900 mb-2">📌 Về phạm vi và cấp độ:</h4>
                        <ul className="list-disc ml-6 space-y-2 text-gray-700">
                          <li><strong>NQ 05/2025/NQ-CP:</strong> Do Chính phủ ban hành, tập trung vào thí điểm thị trường tài sản mã hóa, quy định cụ thể về VASP, điều kiện cấp phép, hoạt động</li>
                          <li><strong>NQ 222/2025/QH15:</strong> Do Quốc hội ban hành, phạm vi rộng hơn về thành lập và vận hành TTTCQT tại TP.HCM và Đà Nẵng với cơ chế đặc thù</li>
                        </ul>
                      </div>

                      <div className="bg-purple-50 rounded-lg p-4">
                        <h4 className="font-semibold text-purple-900 mb-2">🎯 Về mục tiêu:</h4>
                        <ul className="list-disc ml-6 space-y-2 text-gray-700">
                          <li><strong>NQ 05:</strong> Thí điểm có kiểm soát, bảo vệ nhà đầu tư, thực hiện cam kết quốc tế</li>
                          <li><strong>NQ 222:</strong> Xây dựng trung tâm tài chính quốc tế theo chuẩn mực quốc tế, kết nối thị trường toàn cầu</li>
                        </ul>
                      </div>

                      <div className="bg-orange-50 rounded-lg p-4">
                        <h4 className="font-semibold text-orange-900 mb-2">⚡ Về tính chất:</h4>
                        <ul className="list-disc ml-6 space-y-2 text-gray-700">
                          <li><strong>NQ 05:</strong> Mang tính thí điểm trong 5 năm, tập trung vào tài sản mã hóa</li>
                          <li><strong>NQ 222:</strong> Mang tính chiến lược dài hạn, tạo khu vực đặc thù với cơ chế chính sách riêng cho TTTCQT</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                ) : (
                  <>
                    <button
                      onClick={() => toggleSection(section.id)}
                      className="w-full flex items-center justify-between py-4 hover:bg-gray-50 transition-colors"
                    >
                      <h2 className="text-xl font-bold text-green-800">{section.title}</h2>
                      {expandedSections[section.id] ? 
                        <ChevronDown className="w-6 h-6 text-green-600" /> : 
                        <ChevronRight className="w-6 h-6 text-green-600" />
                      }
                    </button>
                    
                    {expandedSections[section.id] && (
                      <div className="pb-6 pl-4">
                        {section.content.map((subsection, idx) => (
                          <div key={idx} className="mb-4">
                            <h3 className="font-semibold text-lg text-gray-800 mb-3">{subsection.subtitle}</h3>
                            <ul className="space-y-2">
                              {subsection.items.map((item, itemIdx) => (
                                <li key={itemIdx} className="flex items-start gap-3">
                                  <span className="text-green-600 mt-1">•</span>
                                  <span className="text-gray-700 flex-1">{item}</span>
                                </li>
                              ))}
                            </ul>
                          </div>
                        ))}
                      </div>
                    )}
                  </>
                )}
              </div>
            ))}
          </div>

          {/* Footer */}
          <div className="bg-gradient-to-r from-green-700 to-emerald-600 text-white p-6 rounded-b-2xl">
            <div>
              <p className="font-semibold">📅 Tài liệu được tổng hợp từ:</p>
              <p className="text-sm text-green-100">Nghị quyết 05/2025/NQ-CP và 222/2025/QH15</p>
            </div>
          </div>
        </div>

        {/* Quick Info Cards */}
        <div className="grid md:grid-cols-3 gap-4 mt-6">
          <div className="bg-white rounded-xl p-4 shadow-lg border-l-4 border-green-600">
            <h3 className="font-bold text-green-800 mb-2">📊 Vốn điều lệ</h3>
            <p className="text-2xl font-bold text-green-600">10,000 tỷ</p>
            <p className="text-sm text-gray-600">Tối thiểu cho VASP</p>
          </div>
          
          <div className="bg-white rounded-xl p-4 shadow-lg border-l-4 border-blue-600">
            <h3 className="font-bold text-blue-800 mb-2">⏱️ Thời gian</h3>
            <p className="text-2xl font-bold text-blue-600">5 năm</p>
            <p className="text-sm text-gray-600">Thí điểm thị trường</p>
          </div>
          
          <div className="bg-white rounded-xl p-4 shadow-lg border-l-4 border-purple-600">
            <h3 className="font-bold text-purple-800 mb-2">🏢 Số lượng VASP</h3>
            <p className="text-2xl font-bold text-purple-600">Tối đa 05</p>
            <p className="text-sm text-gray-600">Tổ chức được cấp phép</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VASPComprehensiveDoc;
