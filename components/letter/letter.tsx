import React from "react";
import { Admitted } from "@prisma/client";
import { Document, Page, Text, View, StyleSheet } from "@react-pdf/renderer";

const styles = StyleSheet.create({
  page: {
    padding: 50,
    fontSize: 12,
  },
  heading: {
    marginBottom: 50,
    borderBottom: "1px solid black",
  },
  header: {
    fontSize: 14,
    textAlign: "center",
    fontWeight: "bold",
    marginBottom: 5,
  },
  section: {
    marginBottom: 12,
  },
  listItem: {
    marginBottom: 10,
    lineHeight: "1.15",
  },
  bold: {
    fontWeight: "bold",
  },
  signature: {
    marginTop: 30,
  },
  temp: {
    fontSize: 14,
    textAlign: "center",
    marginBottom: 20,
    fontWeight: "bold",
    color: "red",
  },
  watermark: {
    position: "absolute",
    top: "40%",
    left: "10%",
    fontSize: 70,
    fontWeight: "black",
    color: "rgba(150,150,150,0.4)", // light gray, transparent
    transform: "rotate(-30deg)",
    textAlign: "center",
    zIndex: -1,
  },
});

const MyDocument: React.FC<{ applicant: Admitted }> = ({ applicant }) => (
  <Document>
    <Page size="A4" style={styles.page}>
      <Text style={styles.watermark}>NMTC KUMASI</Text>
      {/* Header */}
      <View style={styles.heading}>
        <Text style={styles.header}>
          NURSING AND MIDWIFERY TRAINING COLLEGE, KUMASI
        </Text>
        <Text style={styles.header}>REPORTING INSTRUCTIONAL SHEET</Text>
      </View>

      {/* Body */}
      <View style={styles.section}>
        <Text style={{ textTransform: "uppercase", marginBottom: 30 }}>
          Dear {applicant.name},
        </Text>
      </View>

      <View style={styles.section}>
        <Text style={styles.listItem}>
          Congratulations on your admission at Nursing and Midwifery Training
          College, Kumasi to study a 3-year{" "}
          <Text style={{ fontWeight: "bold" }}>
            DIPLOMA IN {applicant.programme}
          </Text>{" "}
          PROGRAMME.
        </Text>
        <Text style={styles.listItem}>
          You are to report to the College on{" "}
          <Text style={{ fontWeight: "bold" }}>19TH SEPTEMBER, 2025</Text> for
          the commencement of your training.
        </Text>
        <Text style={styles.listItem}>
          On arrival, all required items that were stated on your prospectus
          will be inspected by the Student Representative Council officials and
          all other procedures follow.
        </Text>
        <Text style={styles.listItem}>
          The dress code for the reporting date should be a white shirt with
          black skirt for females and a white shirt and khaki trousers for
          males.
        </Text>
        <Text style={styles.listItem}>
          Please come along with your payment receipt issued to you as well as
          all relevant documents (i.e Birth Certificate, Results Certificate,
          Testimonial etc)
        </Text>
        <Text style={styles.listItem}>
          In addition, you are to come along with any form of identification,
          preferably a Ghana card and a National Health Insurance card (if
          available).
        </Text>
        <Text style={styles.listItem}>
          You are affiliated to{" "}
          <Text style={{ fontWeight: "bold" }}>{applicant.hall}</Text> hall.
        </Text>
      </View>

      <View style={{ marginVertical: 25 }}>
        <Text style={{ fontStyle: "italic" }}>
          NB: Please do well to present a hardcopy of this letter when reporting
          to the College as it may also be used to verify your admission.
        </Text>
      </View>

      <View style={styles.section}>
        <Text>Thank you and see you soon.</Text>
      </View>

      <View style={styles.signature}>
        <Text style={{ fontWeight: "bold" }}>{applicant.code}</Text>
      </View>
    </Page>
  </Document>
);

export default MyDocument;
